import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";
import { signIn } from "next-auth/react";
import GoogleProvider from "next-auth/providers/google"
import User from "@/app/models/User";
import ConnectDb from "@/app/utils/ConnectDb";


async function login(credentials){
    try {
        await ConnectDb();
        const user = await User.findOne({email: credentials.email});
        const isCorrect = await bcrypt.compare(credentials.password,user.password)

        if(!isCorrect) throw new Error("wrong credentials");
        return user;
    }
    catch(er){
        throw new Error(err.message);
    }
}

async function createUserIfNotExists(token){
    await ConnectDb();

    let user = await User.findOne({email:token.email});

    if(!user){
        user = await new User({email:token.email, name: token.name, image:token.picture}).save();
    }

    return user;
}


export const authOptions = {
   pages:{ signIn:"/login" },

  providers: [
    CredentialsProvider({
        name:"credentials",
        credentials:{},
        async authorize(credentials) {
            try{
                console.log(credentials)

                const user = await login(credentials);
                console.log("this is user = ", user);
                return user;
            }
            catch(errors){
                console.log("fail to login = ", errors.message);
                throw new Error("failed to login");
            }
        }
    }),

    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
 
  ],
  session:{
    strategy:"jwt",
  },
  callbacks:{
    async jwt({token, user}){
        if(user){
            token.id = user._id;
            token.email = user.email;

            const newUser = await createUserIfNotExists(token);
            
            token.name = newUser.name;
            token.role = newUser.role;

            console.log("this is token", token);
        }
        return token;
    },
    async session({session, token}){
        if (!session.user) session.user = {};
            session.user.id = token.id;
            session.email = token.email;
            session.name = token.name;
            session.role = token.role;
        
        return session;
    }
  }
}
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}