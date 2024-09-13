export function Muted({ children }: { children: React.ReactNode }) {
    return (
        <small className="text-sm font-medium leading-none">
            {children}
        </small>
    )
}