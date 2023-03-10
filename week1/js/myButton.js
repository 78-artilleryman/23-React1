function myButton(props){
    const [isClicked, setIsClicked] = React.useState(false);

    return React.crateElement(
        'button',
        {onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.crateElement(myButton), domContainer);