import UpdateTaskForm from "@/app/components/Tasks/UpdateTaskForm";
interface Params {
  id: string;
}

export default function UpdateTask({ params }: { params: Params }) {
  const { id } = params;
  const taskId = parseInt(id);
  return (
    <div>
      <UpdateTaskForm taskId={taskId} />
    </div>
  );
}
