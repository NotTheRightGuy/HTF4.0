import { Card, TextField, TextArea } from "@radix-ui/themes";
import { SiReasonstudios } from "react-icons/si";
import { MdOutlinePets } from "react-icons/md";
import { GoNumber } from "react-icons/go";

import { useRef } from "react";

export default function AdoptionForm() {
    const imageRef = useRef();
    const db_url = "";

    function uploadImage() {}

    function uploadToDatabase() {}

    return (
        <div className="flex h-screen justify-center items-center">
            <Card className=" h-[90vh] w-[90vw] p-4 bg-slate-100 grid grid-cols-2">
                <div>
                    <section>
                        <h1 className="text-3xl font-protest opacity-90">
                            Put your Pet for Adoption
                        </h1>
                        <div className="text-sm font-poppins opacity-70 mt-2">
                            It's not easy saying goodbye to your furry family
                            member, but we understand. We'll do our best to find
                            them the perfect forever home. Make sure to fill
                            this form to the best of your knowledge.
                        </div>
                    </section>
                    <section>
                        <div className="text-sm font-poppins mt-5 mb-2">
                            Name
                        </div>
                        <TextField.Root className="w-2/3">
                            <TextField.Slot>
                                <MdOutlinePets height="16" width="16" />
                            </TextField.Slot>
                            <TextField.Input placeholder="People would love to know what you call him" />
                        </TextField.Root>
                        <div className="text-sm font-poppins mt-5 mb-2">
                            Age
                        </div>
                        <TextField.Root className="w-2/3">
                            <TextField.Slot>
                                <GoNumber height="16" width="16" />
                            </TextField.Slot>
                            <TextField.Input placeholder="How young is your kiddo?" />
                        </TextField.Root>
                        <div className="text-sm font-poppins mt-5 mb-2">
                            Species
                        </div>
                        <TextField.Root className="w-2/3">
                            <TextField.Slot>
                                <GoNumber height="16" width="16" />
                            </TextField.Slot>
                            <TextField.Input placeholder="Is it Dog? Is it a Cat? No it's a unicorn" />
                        </TextField.Root>
                        <div className="text-sm font-poppins mt-5 mb-2">
                            Give a brief description
                        </div>
                        <TextArea className="w-2/3" />
                    </section>
                    <div className="text-sm font-poppins mt-5 mb-2">
                        Reason to put for Adoption
                    </div>
                    <TextField.Root className="w-2/3">
                        <TextField.Slot>
                            <SiReasonstudios height="16" width="16" />
                        </TextField.Slot>
                        <TextField.Input placeholder="Don't worry we won't judge" />
                    </TextField.Root>

                    <div className="text-sm font-poppins mt-5 mb-2">
                        Share the cutest picture of your pet. We won't mind
                        snooping
                    </div>
                    <input
                        type="file"
                        className="font-roboto text-sm"
                        ref={imageRef}
                    />
                </div>
            </Card>
        </div>
    );
}
