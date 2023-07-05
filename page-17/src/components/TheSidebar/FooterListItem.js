function FooterListItem({ children: label }) {
    const currentDate = new Date().toLocaleDateString();
    return (
        <li>
            <a href="/" className="text-[11px] hover:underline py-2">
                {label} 
            </a>
        </li>
    );
}

export default FooterListItem;
