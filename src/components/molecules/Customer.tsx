// src/components/molecules/Customer.tsx

import React from "react";
import Image from "../atoms/Image";
import Typography from "../atoms/Typography";
import { type CustomerData } from "../../constants/CustomerData";
import { StyledCustomer, CustomerContent, StyledImage } from "./Customer.styles";

export interface CustomerProps {
    data: CustomerData;
}

const Customer: React.FC<CustomerProps> = ({
    data
}) => {
    return (
        <StyledCustomer>
            <StyledImage>
                <Image src={data.imageSrc} alt={data.name} width="5rem" height="auto" />
            </StyledImage>
            <CustomerContent>
                <Typography variant="h3" color='black'>{data.name}</Typography>
                <Typography variant="caption" color='#666'>{data.description}</Typography>
                <Typography variant="caption" color='#666'>{data.duration}</Typography>
            </CustomerContent>
        </StyledCustomer>
    );
};

export default Customer;