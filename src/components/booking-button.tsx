import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { BubblesIcon } from "./icons";

export default function BookingButton() {
    const navigate = useNavigate()
    return (
        <>
            <Button  onPress={() => navigate('/booking')}>
                <BubblesIcon />
                Schedule A Grooming!
            </Button>
        </>
    )
}