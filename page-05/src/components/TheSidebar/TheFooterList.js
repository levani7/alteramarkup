import FooterListItem from './FooterListItem';

function TheFooterList() {
    const currentDate = new Date().toLocaleDateString([], { hour: '2-digit', minute: '2-digit' });
    return (
        <ul>
            {[currentDate, 'Created by ALTERA'].map((label) => (
                <FooterListItem key={label}>{label}</FooterListItem>
            ))}
        </ul>
    );
}

export default TheFooterList;
