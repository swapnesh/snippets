import { db } from "@/db";

export default function SnippetsCreatePage() {
  async function createSnippet() {
    // This needs to be a server action

    // Check the user's input and make sure they are valid

    // Create a new record in the database

    // Redirect to the home page
  }

  return <form>
    <h3 className="">Create a Snippet</h3>
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <label className="w-12" htmlFor="title">Title</label>
        <input
          name="title"
          className="border rounded p-2 w-full"
          id="title"
        />
      </div>
      <div className="flex gap-4">
        <label className="w-12" htmlFor="code">Code</label>
        <textarea
          name="code"
          className="border rounded p-2 w-full"
          id="code"
        />
      </div>
      <button type="submit" className="border rounded p-2 bg-blue-200">
        Create
      </button>
    </div>
  </form>
}
