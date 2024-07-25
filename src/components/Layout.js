import './Layout.css'

export const Layout = ({ children }) => {
    return (
        <div className="Container">
            <div className="BackgroundImage" />
            {children}
        </div>
    )
}