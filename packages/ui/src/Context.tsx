import * as React from 'react'

interface IAppContext {
  isMenuCollapsed: boolean,
  toggleMenu: () => void,
}

interface IContextProps {
  children: React.ReactElement,
}

interface IContextState {
  isMenuCollapsed: boolean,
}

const ctx = React.createContext<IAppContext | null>(null)

const AppContextProvider = ctx.Provider
export const AppContextConsumer = ctx.Consumer

class Context extends React.Component<IContextProps, IContextState> {
  state = {
    isMenuCollapsed: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuCollapsed: !prevState.isMenuCollapsed
    }))
  }

  render() {
    const { children } = this.props

    return (
      <AppContextProvider value={{
        ...this.state,
        toggleMenu: this.toggleMenu,
      }}>
        {children}
      </AppContextProvider>
    )
  }
}

export default Context