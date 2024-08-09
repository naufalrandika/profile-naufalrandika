"use client";

import { useSession, signOut } from "next-auth/react"
import Image from "next/image"

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        <div className="w-44 h-44 relative mb-4">
        <Image
          src={session.user?.image as string}
          fill
          alt=""
          className="object-cover rounded-full"
        />
        </div>
        <p>Welcome {session.user?.name}. Signed In As {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }

  return (
    <div>
      <p>You are not signed in</p>
    </div>
  )
}
