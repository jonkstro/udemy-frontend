import { ItemComponent } from "../ItemComponent";

export function ListComponent() {
    return (
        <>
            <h2>Minha lista</h2>
            <ul>
                <ItemComponent name={'Meu item'} />
            </ul>
        </>
    );
}