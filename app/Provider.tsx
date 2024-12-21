import { ThemeProvider } from "next-themes"

const Provider = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider 
            attribute={"class"}
            defaultTheme={"light"}
            enableSystem
        >
        {children}
    </ThemeProvider>
}

export default Provider;