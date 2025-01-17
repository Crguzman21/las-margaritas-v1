import FlexContainer from "./FlexContainer";
import Item from "./Item";



function ItemList(props) {
    return(
        <div>
            <FlexContainer>
            <h2>{props.greeting}</h2>
            {props.products.map((item) => (
                <Item 
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                text={item.description}
                img={item.img}
                />
            ))}
        </FlexContainer>

        </div>
        
    );
}

export default ItemList;
