import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const FAQPage = () => {
    return (
        <section className="container mx-auto">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter">FAQ</h1>

            <div className="">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How Do I Get Started With Hacking?</AccordionTrigger>
                        <AccordionContent>
                        You can start by Learning Programming, Networking, and Operating Systems. Also, you can start with my Network Penetration Testing Playlist.
                        https://www.youtube.com/watch?v=MspUTBYKrkM
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </section>
    )
}

export default FAQPage