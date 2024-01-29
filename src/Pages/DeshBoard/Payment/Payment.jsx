import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Dna } from "react-loader-spinner";
const stripePromise = loadStripe('pk_test_51OEvIoGHGhUeQP75drdmhJBIQHSLFTm1H2LSWs7Buig47gSkNNQ1Boi7C94sN3JiGN6ldbSUj7tOGq1541SYuKXd002mfOwQIx');
const Payment = () => {

    return (
        <div>
            <Helmet>
                <title> Bistor Boss |  Payment </title>
            </Helmet>
            <Dna
                visible={true}
                height="80"
                width='100'
                // width="1000"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
            <SectionTitle
                headings={'---What Our Clients Say---'}
                subHeading={'Payment'}
            ></SectionTitle>

            <Elements stripe={stripePromise} >
                <CheckOutForm></CheckOutForm>
            </Elements>


        </div>
    );
};

export default Payment;