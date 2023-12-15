import React, { useEffect } from 'react'
import PageContainer from '../../../CustomElements/Containers/PageContainer'
import usePageTitle from '../../../hooks/usePageTitle'
import { Stack, Typography } from '@mui/material'
import FlexBox from '../../../CustomElements/Containers/FlexBox'

const MyProfile = () => {

    const { setTitleProps } = usePageTitle()

    useEffect(()=> {
        setTitleProps({title: 'My Profile'})
    },[])
    return (
        <PageContainer>

            <Stack direction={'row'}  flexGrow={1}>
                <FlexBox sx={{flex: 1}}>
                    <Typography variant='h4'>Rishik</Typography>
                    
                </FlexBox>
                <FlexBox sx={{width: '19rem'}}>

                </FlexBox>
            </Stack>


        </PageContainer>

    )
}

export default MyProfile