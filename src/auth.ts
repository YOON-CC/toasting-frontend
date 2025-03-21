import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/join",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.id = account.providerAccountId;
        token.type = account.provider;
      }
      return token;
    },
    async session({ session, token }) {
      return { ...session, ...token };
    },
    async signIn({ user, account }) {
      console.log(user, "@@@@@", account);

      try {
        console.log("asdf");

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/v1/member/login/google`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: user.email,
              username: user.name,
              snsType: account?.provider,
              snsId: account?.providerAccountId,
            }),
          }
        );
        console.log("서버에서 받는 값", res);

        // 여기 계속 바꿔야함
        if (res.status === 200) {
          console.log(res.status);

          return "/signIn";
        } else if (res.status === 201) {
          console.log(res.status);
          return true;
        } else {
          throw new Error("로그인 실패");
        }
      } catch (error) {
        console.error("로그인 오류:", error);
        return false; // 실패 시 false 반환
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
});
