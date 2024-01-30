import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/Snippet-Edit-Form";

interface SnippeByIdEditPageProps {
  params: {
    id: string
  }
}

export default async function SnippeByIdEditPage(props: SnippeByIdEditPageProps) {
  const id = parseInt(props.params.id, 10);

  const snippet = await db.snippet.findFirst({
    where: { id }
  })

  if(!snippet) {
    notFound();
  }

  return <div>
    <h3>Editing snippet with title {snippet.title}</h3>
    <SnippetEditForm snippet={snippet} />
    </div>
}
