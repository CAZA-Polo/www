const NPCSeal = () => {

    // Change image of NPC logo depending on the name of the logo uploaded to ./images/dpo folder
    const npcLogo = 'npc-2025.png'

    return (
        <div className="flex justify-center items-center">
            <img className="justify-center md:w-1/2 w-auto" alt="npc-seal" src={`./images/dpo/${npcLogo}`} />
        </div>
    )
}

export default NPCSeal;