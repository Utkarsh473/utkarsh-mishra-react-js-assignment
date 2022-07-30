import React, {MouseEvent, Component, ReactElement, cloneElement } from "react";
import "../index.css"

type State = {
    activeChild : number
}

type Props={
    children: ReactElement[]
}


class Navbar extends Component<Props, State>{

    constructor(props: Props)
    {
        super(props);

    }
    
    state = {
        activeChild : 0
    };

    setActiveChild = async (num: number) => {
        await this.setState({
            activeChild: num
        })

        // console.log(this.state)

    }

    
    render(): React.ReactNode {
        
        console.log("re-render")
        
        const {activeChild} = this.state
        const {children} = this.props

        console.log(activeChild, children)
        
        const el = (
        <>
        <div className = "Nav-parent">
        <button className="Nav-child-button" onClick={() => this.setActiveChild(0)}>Movies Coming</button>
        <button className="Nav-child-button" onClick={() => this.setActiveChild(1)}>Movies in Theaters</button>
        <button className="Nav-child-button" onClick={() => this.setActiveChild(2)}>Top rated India</button>
        <button className="Nav-child-button" onClick={() => this.setActiveChild(3)}>top-rated-movies</button>
        <button className="Nav-child-button" onClick={() => this.setActiveChild(4)}>Favorite</button>
        <input id="search-bar" type="text" placeholder="Search.."/>
        </div>
        {children[activeChild]}
        </> 
        )

        

        return el;
        
    }

}

export default Navbar;