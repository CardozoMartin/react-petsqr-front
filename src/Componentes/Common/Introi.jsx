import "./intro.css"

const Introi = () => {
  return (
    <div className="containerIntro">
        <div className="leftInt">
            <h1>Una nueva forma de tener seguridad con tu mejor amigo de 4 patas</h1>
            <p>Tené toda su información en un solo lugar. Su seguridad y felicidad es lo más importante.</p>
            <div className="leftDesc">
                <button>START A PROJECT</button>
                <div className="leftContact">
                    <span>1234566</span>
                    <h4>Martin</h4>
                </div>
            </div>
        </div>
        <div className="rightInt">
            <img src="https://findpetapp.com/site/wp-content/uploads/2022/03/animacio%CC%81n3.gif" alt="" className="image" />
        </div>
    </div>
  )
}

export default Introi