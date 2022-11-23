import { ItemComponent } from "../ItemComponent";

export function ListComponent(props: any) {
    return (
        <>
            <h2>{ props.listName }</h2>
            <ul>
                <ItemComponent name={'Meu item'} />
            </ul>
        </>
    );
}