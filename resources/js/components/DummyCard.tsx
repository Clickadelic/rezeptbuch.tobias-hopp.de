
interface DummyCardProps {
    name?: string | "Card Title";
    description: string | "Card Description";
    image: string | "https://placehold.co/600x400";
}

export default function DummyCard ({ name, description, image }: DummyCardProps) {
    return (
        <div className="w-full mb-4 max-h-96 bg-white rounded-lg shadow-lg">
            <img src="https://placehold.co/600x400" alt="Dummy Image" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
            </div>
        </div>
    )
}