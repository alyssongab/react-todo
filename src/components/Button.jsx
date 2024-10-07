
function Button(props) {
    return (

        <button {...props} className="bg-slate-300 p-2 rounded-md hover:scale-105">
            {props.children} {/* O que é passado para dentro do componente (conteúdo do button) */} 
        </button>

    );
}

export default Button;