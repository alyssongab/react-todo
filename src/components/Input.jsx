
function Input(props) {

    return(

        <input className="border border-slate-400 focus:outline-none 
        focus:ring-2 focus:ring-indigo-500 transition duration-300 px-4 py-2 rounded-md"
        {...props} // Passa todas as props para o input
        />
    
    );

}

export default Input;