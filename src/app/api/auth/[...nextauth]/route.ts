// import NextAuth from "next-auth";

// const handlerAuth = NextAuth({});

// export { handlerAuth as GET, handlerAuth as POST };

import { handlers } from "@/configs/auth";

export const { GET, POST } = handlers;
