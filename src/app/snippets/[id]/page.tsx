import { notFound } from "next/navigation";
import { db } from "@/db";
import Link from "next/link";

interface SnippetByIdPageProps {
  params: {
    id: string
  }
}

export default async function SnippetByIdPage(props: SnippetByIdPageProps) {
  // Note we can use the ommented as well to cause a delay of 2 sec
  // but the uncommented code is a cleaner way of writing code -
  // await new Promise(() => setTimeout(() => {}, 2000));

  // Set 5 second delay to show loading
  await new Promise((resolveFunction) => setTimeout(resolveFunction, 2000));

  const snippet = await db.snippet.findFirst({
    where: { id: +props.params.id }
  })

  if(!snippet) {
    return notFound();
  }

  return <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded">Edit</Link>
          <button className="p-2 border rounded">Delete</button>
        </div>
      </div>
      <pre
        className="p-3 border rounded bg-gray-200 border-gray-200"
      >{snippet.code}</pre>
    </div>
}
