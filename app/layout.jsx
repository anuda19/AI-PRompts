import Nav from '@Components/Nav'
import Provider from '@Components/Provider'
import '@styles/globals.css'

export const metadata = {
    title: 'Promptopia',
    desc: 'Discover & share AI Prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
        <Provider>
            <div className="main">
                <div className="gradient"></div>
            </div>
            <main className='app'>
            <Nav />
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout