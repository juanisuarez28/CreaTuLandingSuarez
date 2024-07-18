import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { CheckIcon } from '@heroicons/react/20/solid'

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    repeatedEmail: "",
    phone: "",
  });

  return (
    <Box pt={"180px"}>

    </Box>
  );
};

export default Checkout;
