import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Appointment = {
  ownerName: string;
  email: string;
  phoneNumber?: string;
  dogName: string;
  time: Date;
  furLength: string;
  dogSize: string;
  allergy: boolean;
  allergyDescription?: string;
  location: string;
  additionalDetails: string;
}