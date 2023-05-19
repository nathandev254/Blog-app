function Footer() {

    const now = new Date().toDateString()

    return(
        <div className="Footer">
            <p>Nathaniel</p>
            <p>{now}</p>
        </div>
    );
    
}

export default Footer