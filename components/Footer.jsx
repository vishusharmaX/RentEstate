import {Box,Flex} from '@chakra-ui/react';
import Link from 'next/link';
import {AiOutlineInstagram,AiOutlineGithub,AiOutlineLinkedin} from 'react-icons/ai'
const Footer= ()=>(
    <Box  textAlign={"center"} p="5" color={"gray.600"} borderTop="1px" borderColor={'gray.400'}>
        <Flex flexWrap={"wrap"} justifyContent="space-evenly" alignItems={"center"} padding="5px" fontSize="40px" mb="14px">
            <Link href={"https://www.instagram.com/vishu.livincool/"} passHref>
                <AiOutlineInstagram/>
            </Link>
            <Link href={"https://github.com/vishusharmaX"} passHref>
                <AiOutlineGithub/>
            </Link>
            <Link href={"https://www.linkedin.com/in/vishwajeet-sharma-649a21205/"} passHref>
                <AiOutlineLinkedin/>
            </Link>
        </Flex>
        2021 RentEstate ,Inc.
    </Box>
)

export default Footer;