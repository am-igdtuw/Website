export default function App() {
    function Submit(e) {
        const formElement = document.querySelector(".form-classname")
        e.preventDefault()
        console.log("Submitted")
        const formData = new FormData(formElement)
        fetch("https://script.google.com/macros/s/AKfycbz-AKTlp83hW05v_WHGQbhgbngInPvC4r7uyDbzAKb-dxPw3e2b4zDVT3n4c5Un-6kj/exec", 
        {
           method: "POST",
           body: formData
        }).then((res)=>res.json()).then((data)=>{
           console.log(data) 
        }).catch((error)=> console.log(error));

    }
    return (
        <div className="App">
            <form className="form-classname" onSubmit={(e)=>Submit(e)}> 
                {/* DATA FORM CODE */}
            </form>
        </div>
    );
}
