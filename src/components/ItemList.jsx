import FlexContainer from "./FlexContainer";
import Item from "./Item";



function ItemList(props) {
    return(
        <div>
            <FlexContainer>
            <h2>{props.greeting}</h2>
            {props.products.map((item) => (
                <Item 
                key={item.id} {...item}
                />
            ))}
        </FlexContainer>

        </div>
        
    );
}

export default ItemList;
