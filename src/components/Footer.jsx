const Footer = ()=>{
    const year = new Date().getFullYear();
    console.log(year);
    return(
        <div className="footer">
            <p>Copyright ©️ {year}</p>
        </div>
    )
}
export default Footer;