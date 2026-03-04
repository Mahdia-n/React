export default function Certificate({name, label, value}) {
    return (
        <div>
            <p>{name} has earned a certificate for {label}: {value}</p>
        </div>
    )

}
