import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    const onBackClick = () => {
        navigate(-1);
    }

    return (
        <div className="w-screen h-screen bg-zinc-900 flex justify-center p-6">
            <div className="w-[500px] space-y-4">

                <div className="flex justify-center gap-2 relative">
                    <button onClick={onBackClick} 
                    className="absolute left-0 top-0 bottom-0 bg-indigo-600 px-3 rounded-md font-medium text-white">
                        Back
                    </button>
                    <h1 className="text-white text-3xl text-center">Task details</h1>
                </div>
                
                <div className="space-y-3 bg-slate-50 rounded-md p-4">
                    <h2 className="text-slate-950 text-2xl text-center font-semibold">{title}</h2>
                    <p className="text-slate-950 text-center">{description}</p>
                </div>

            </div>
        </div>
    );
}

export default TaskPage;    