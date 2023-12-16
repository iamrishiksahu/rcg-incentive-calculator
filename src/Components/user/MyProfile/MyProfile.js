import React, { useEffect } from 'react'
import PageContainer from '../../../CustomElements/Containers/PageContainer'
import usePageTitle from '../../../hooks/usePageTitle'
import { Stack, Tooltip, Typography } from '@mui/material'
import FlexBox from '../../../CustomElements/Containers/FlexBox'

const MyProfile = () => {

    const { setTitleProps } = usePageTitle()

    useEffect(() => {
        setTitleProps({ title: 'My Profile' })
    }, [])
    return (
        <PageContainer>

            <Stack spacing={'2rem'}>
                <FlexBox>
                    <Stack direction={'row'} spacing={'2rem'}>
                        <img width={120} height={120} src='https://rapidtech.keka.com/files/4f689000-8639-4b64-9aa6-c95fb3b1b05e/200x200/profileimage/9fcd7b8346574b3db345e79569a4f2d8.jpg?1702742400000?1702742400000' alt='profile image' style={{
                            borderRadius: '8%'
                        }} />
                        <Stack justifyContent={'space-evenly'} flex={1}>
                            <Stack direction={'row'} spacing={'1rem'} alignItems={'center'} >
                                <Typography variant='h3' sx={{
                                    width: 'max-content'
                                }}>Rishik Sahu</Typography>

                                <Tooltip title='Click to copy!' arrow>
                                    <Typography variant='body2'
                                        onClick={(e) => {
                                            console.log(e.currentTarget.textContent)
                                            navigator.clipboard.writeText(e.currentTarget.textContent)
                                        }}
                                        sx={{
                                            backgroundColor: 'var(--blue-3)',
                                            padding: '.25rem 1rem',
                                            borderRadius: '1rem',
                                            color: 'var(--color-text-1)',
                                            cursor: 'pointer',
                                        }}>+91-8987400143</Typography>
                                </Tooltip>
                            </Stack>
                            <Stack direction={'row'} spacing={'2rem'} >
                                <DetailItem title='Job Title' value='Front End UI Developer' variant={'body2'} />
                                <DetailItem title='Department' value='Information Technology' variant={'body2'} />
                                <DetailItem title='Business Unit' value='Rapid Technologies' variant={'body2'} />
                                <DetailItem title='Reporting Manager' value='Bhavya Boddeti' variant={'body2'} />
                                <DetailItem title='EMP No' value='101' />
                            </Stack>

                        </Stack>


                    </Stack>
                </FlexBox>

                <Stack direction={'row'} spacing={'2rem'}>
                    <FlexBox>
                        <TitleItem title='Primary Details' link='sdf' />
                        <Stack spacing={'1rem'} flex={1}>
                            <Stack direction={'row'}>
                                <DetailItem title={'First Name'} value={'Rishik'} />
                                <DetailItem title={'Middle Name'} value={'Kumar'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Last Name'} value={'Sahu'} />
                                <DetailItem title={'Display Name'} value={'Rishik Kumar Sahu'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Gender'} value={'Male'} />
                                <DetailItem title={'Date of Birth'} value={'24 Nov, 2000'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Marital Status'} value={'Single'} />
                                <DetailItem title={'Blood Group'} value={'O+'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Physically Handicapped'} value={'No'} />
                            </Stack>
                        </Stack>
                    </FlexBox>
                    <FlexBox>
                        <TitleItem title='Contact Details' link='sdf' />

                        <Stack spacing={'1rem'} flex={1}>
                            <Stack direction={'row'}>
                                <DetailItem title={'Work Email'} value={'rishik.sahu@rapidtechservices.com'} />
                                <DetailItem title={'Personal Email'} value={'iamrishiksahu@gmail.com'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Mobile Phone'} value={'+91-8987400143'} />
                                <DetailItem title={'Work Phone'} value={'NA'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Residence Phone'} value={'NA'} />
                                <DetailItem title={'Skype'} value={'NA'} />
                            </Stack>
                           
                        </Stack>
                    </FlexBox>

                </Stack>

                <Stack direction={'row'} spacing={'2rem'}>
                    <FlexBox>
                        <TitleItem title='Addresses' link='sdf' />
                        <Stack spacing={'1rem'} flex={1}>
                            <Stack direction={'row'}>
                                <DetailItem title={'First Name'} value={'Rishik'} />
                                <DetailItem title={'Middle Name'} value={'Kumar'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Last Name'} value={'Sahu'} />
                                <DetailItem title={'Display Name'} value={'Rishik Kumar Sahu'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Gender'} value={'Male'} />
                                <DetailItem title={'Date of Birth'} value={'24 Nov, 2000'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Marital Status'} value={'Single'} />
                                <DetailItem title={'Blood Group'} value={'O+'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Physically Handicapped'} value={'No'} />
                            </Stack>
                        </Stack>
                    </FlexBox>
                    <FlexBox>
                        <TitleItem title='Relations' link='sdf' />

                        <Stack spacing={'1rem'} flex={1}>
                            <Stack direction={'row'}>
                                <DetailItem title={'First Name'} value={'Rishik'} />
                                <DetailItem title={'Middle Name'} value={'Kumar'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Last Name'} value={'Sahu'} />
                                <DetailItem title={'Display Name'} value={'Rishik Kumar Sahu'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Gender'} value={'Male'} />
                                <DetailItem title={'Date of Birth'} value={'24 Nov, 2000'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Marital Status'} value={'Single'} />
                                <DetailItem title={'Blood Group'} value={'O+'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Physically Handicapped'} value={'No'} />
                            </Stack>
                        </Stack>
                    </FlexBox>

                </Stack>


                <Stack direction={'row'} spacing={'2rem'}>
                    <FlexBox>
                        <TitleItem title='Experience' link='sdf' />
                        <Stack spacing={'1rem'} flex={1}>
                            <Stack direction={'row'}>
                                <DetailItem title={'First Name'} value={'Rishik'} />
                                <DetailItem title={'Middle Name'} value={'Kumar'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Last Name'} value={'Sahu'} />
                                <DetailItem title={'Display Name'} value={'Rishik Kumar Sahu'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Gender'} value={'Male'} />
                                <DetailItem title={'Date of Birth'} value={'24 Nov, 2000'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Marital Status'} value={'Single'} />
                                <DetailItem title={'Blood Group'} value={'O+'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Physically Handicapped'} value={'No'} />
                            </Stack>
                        </Stack>
                    </FlexBox>
                    <FlexBox>
                        <TitleItem title='Education' link='sdf' />


                        <Stack spacing={'1rem'} flex={1}>
                            <Stack direction={'row'}>
                                <DetailItem title={'First Name'} value={'Rishik'} />
                                <DetailItem title={'Middle Name'} value={'Kumar'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Last Name'} value={'Sahu'} />
                                <DetailItem title={'Display Name'} value={'Rishik Kumar Sahu'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Gender'} value={'Male'} />
                                <DetailItem title={'Date of Birth'} value={'24 Nov, 2000'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Marital Status'} value={'Single'} />
                                <DetailItem title={'Blood Group'} value={'O+'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Physically Handicapped'} value={'No'} />
                            </Stack>
                        </Stack>
                    </FlexBox>

                </Stack>


                <Stack direction={'row'} spacing={'2rem'}>
                    <FlexBox>
                        <TitleItem title='Identity Information' link='sdf' />
                        <Stack spacing={'1rem'} flex={1}>
                            <Stack direction={'row'}>
                                <DetailItem title={'First Name'} value={'Rishik'} />
                                <DetailItem title={'Middle Name'} value={'Kumar'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Last Name'} value={'Sahu'} />
                                <DetailItem title={'Display Name'} value={'Rishik Kumar Sahu'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Gender'} value={'Male'} />
                                <DetailItem title={'Date of Birth'} value={'24 Nov, 2000'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Marital Status'} value={'Single'} />
                                <DetailItem title={'Blood Group'} value={'O+'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Physically Handicapped'} value={'No'} />
                            </Stack>
                        </Stack>
                    </FlexBox>
                    <FlexBox>
                        <TitleItem title='Professional Summary' link='sdf' />
                        <Stack spacing={'1rem'} flex={1}>
                            <Stack direction={'row'}>
                                <DetailItem title={'First Name'} value={'Rishik'} />
                                <DetailItem title={'Middle Name'} value={'Kumar'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Last Name'} value={'Sahu'} />
                                <DetailItem title={'Display Name'} value={'Rishik Kumar Sahu'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Gender'} value={'Male'} />
                                <DetailItem title={'Date of Birth'} value={'24 Nov, 2000'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Marital Status'} value={'Single'} />
                                <DetailItem title={'Blood Group'} value={'O+'} />
                            </Stack>
                            <Stack direction={'row'}>
                                <DetailItem title={'Physically Handicapped'} value={'No'} />
                            </Stack>
                        </Stack>
                    </FlexBox>

                </Stack>



            </Stack >


        </PageContainer >

    )
}

const TitleItem = (props) => (
    <Stack direction={'row'} justifyContent={'space-between'} sx={{
        borderBottom: '1px solid var(--color-info-light)',
        paddingBottom: '.75rem'
    }}>
        <Typography variant='h4' sx={{ color: 'var(--color-text-2)' }}>{props.title}</Typography>
        <Typography variant='link' onClick={() => alert(`${props.title} clicked`)}>Edit</Typography>
    </Stack>
)

const DetailItem = (props) => (
    <Stack flex={1}>
        <Typography variant='body2' sx={{
            textTransform: 'capitalize',
            color: 'var(--color-text-3)'
        }}>
            {props.title}
        </Typography>
        <Typography variant={props.variant || 'body'}>{props.value}</Typography>
    </Stack>
)

export default MyProfile