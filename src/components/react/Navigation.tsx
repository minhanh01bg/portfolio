export default function Navigation() {
    return (
        <div className="fixed w-full">
            <div className="flex justify-center">
                <div className="rounded py-4 px-8 border border-blue-900">
                    <div className="flex gap-6">
                        <a href="#skillset">Skillset</a>
                        <a href="#stack">Stack</a>
                        <a href="#projects">Projects</a>
                        <a href="#guides">Guides</a>
                    </div>
                </div>
            </div>
        </div>
    )
}