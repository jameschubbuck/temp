//takes a bunch of <li> elements
export function List({ children }: { children: React.ReactNode }) {
    return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {children}
        </ul>
    )
}