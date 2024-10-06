import Pagina from "@/components/templete/Pagina";

export default function Layout(props:any) {
    return(
        <Pagina>{props.children}</Pagina>
    )
}