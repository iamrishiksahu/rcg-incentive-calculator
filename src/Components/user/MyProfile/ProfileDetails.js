import React from 'react'
import FlexBox from '../../../CustomElements/Containers/FlexBox'
import { Stack, Typography } from '@mui/material'
import { Steps } from 'antd'

const ProfileDetails = (props) => {

    const DetailItem = props.detailItem
    const IdentityItem = props.identityItem
    const TitleItem = props.titleItem
    return (
        <Stack spacing={'2rem'}>

            <Stack direction={'row'} spacing={'2rem'}>
                <FlexBox>
                    <TitleItem title='Primary Details' link='sdf' />
                    <Stack spacing={'1rem'} flex={1}>
                        <Stack direction={'row'} spacing={'2rem'}>
                            <DetailItem title={'First Name'} value={'Rishik'} />
                            <DetailItem title={'Middle Name'} value={'Kumar'} />
                        </Stack>
                        <Stack direction={'row'} spacing={'2rem'}>
                            <DetailItem title={'Last Name'} value={'Sahu'} />
                            <DetailItem title={'Display Name'} value={'Rishik Kumar Sahu'} />
                        </Stack>
                        <Stack direction={'row'} spacing={'2rem'}>
                            <DetailItem title={'Gender'} value={'Male'} />
                            <DetailItem title={'Date of Birth'} value={'24 Nov, 2000'} />
                        </Stack>
                        <Stack direction={'row'} spacing={'2rem'}>
                            <DetailItem title={'Marital Status'} value={'Single'} />
                            <DetailItem title={'Blood Group'} value={'O+'} />
                        </Stack>
                        <Stack direction={'row'} spacing={'2rem'}>
                            <DetailItem title={'Physically Handicapped'} value={'No'} />
                        </Stack>
                    </Stack>
                </FlexBox>
                <FlexBox>
                    <TitleItem title='Contact Details' link='sdf' />
                    <Stack spacing={'1rem'} flex={1}>
                        <Stack direction={'row'} spacing={'2rem'}>
                            <DetailItem title={'Work Email'} value={'rishik.sahu@rapidtechservices.com'} />
                            <DetailItem title={'Personal Email'} value={'iamrishiksahu@gmail.com'} />
                        </Stack>
                        <Stack direction={'row'} spacing={'2rem'}>
                            <DetailItem title={'Mobile Phone'} value={'+91-8987400143'} />
                            <DetailItem title={'Work Phone'} value={'NA'} />
                        </Stack>
                        <Stack direction={'row'} spacing={'2rem'}>
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
                        <Stack direction={'row'} spacing={'2rem'}>
                            <DetailItem title={'Current Address'} value={'1620, Near Boreya Chowk, Kanke, Ranchi, Jharkhand - 834006'} />
                            <DetailItem title={'Permanent Address'} value={'1620, Near Boreya Chowk, Kanke, Ranchi, Jharkhand - 834006'} />
                        </Stack>
                    </Stack>
                </FlexBox>
                <FlexBox>
                    <TitleItem title='Relations' link='sdf' />

                    <Stack spacing={'1rem'} flex={1}>
                        <Typography>No Data Available</Typography>
                    </Stack>
                </FlexBox>
            </Stack>

            <Stack direction={'row'} spacing={'2rem'}>
                <FlexBox>
                    <TitleItem title='Professional Summary' link='sdf' />
                    <Stack spacing={'1rem'} flex={1}>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum laboriosam exercitationem illum impedit rem illo laudantium, quisquam, non deserunt facere delectus amet, dolorem minima sapiente aspernatur. Possimus voluptas, in quidem ipsa deserunt vitae inventore, eaque, veniam laboriosam rerum unde!</Typography>
                    </Stack>
                </FlexBox>
            </Stack>

            <Stack direction={'row'} spacing={'2rem'}>
                <FlexBox>
                    <TitleItem title='Experience' link='sdf' />
                    <Steps
                        progressDot
                        current={100}
                        direction="vertical"
                        items={[
                            {
                                title: 'Frontend UI Developer',
                                subTitle: '(2 Months)',
                                description: 'Rapid Techbologies',
                            },
                            {
                                title: 'Web Developer',
                                subTitle: '(6 Months)',
                                description: 'Ghughar Media',
                            },
                            {
                                title: 'Android Developer',
                                subTitle: '(8 Months)',
                                description: 'Jharkhand Warrior',
                            },
                        ]}
                    />

                </FlexBox>
                <FlexBox sx={{ justifyContent: 'flex-start' }}>
                    <TitleItem title='Education' link='sdf' />
                    <Steps
                        progressDot
                        current={100}
                        direction="vertical"
                        items={[
                            {
                                title: 'IMSc. in Mathematics & Computing',
                                subTitle: '2024',
                                description: 'Birla Institute of Technology, Mesra'
                            },
                            {
                                title: 'XII - CBSE',
                                subTitle: '2018',
                                description: 'Sri Agrasen School'
                            },
                            {
                                title: 'X - CBSE',
                                subTitle: '2016',
                                description: 'DAV Public School'

                            },
                        ]}
                    />
                </FlexBox>
            </Stack>
            <Stack direction={'row'} spacing={'2rem'}>
                <FlexBox>
                    <TitleItem title='Identity Information' link='sdf' />
                    <Stack spacing={'1rem'} flex={1}>
                        <Stack direction={'row'} spacing={'2rem'}>
                            <IdentityItem>
                                <Stack direction={'row'} alignItems={'center'} gap={'1rem'}>

                                    <Typography variant='h4'>Photo ID</Typography>

                                    <Stack direction={'row'}>
                                        <span class="material-symbols-outlined" style={{
                                            color: 'var(--color-text-3)'
                                        }}>
                                            attach_file
                                        </span>
                                        <Typography variant='link1'>File</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction={'row'} spacing={'2rem'}>
                                    <DetailItem title={'ID Number'} value={'Sahu'} />
                                    <DetailItem title={'Name'} value={'Rishik Kumar Sahu'} />
                                </Stack>
                                <Stack direction={'row'} spacing={'2rem'}>
                                    <DetailItem title={'Date of Birth'} value={'24-Nov-2000'} />
                                    <DetailItem title={'Gender'} value={'Male'} />
                                </Stack>
                                <Stack direction={'row'} spacing={'2rem'}>
                                    <DetailItem title={'Address'} value={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aspernatur voluptas dignissimos illum.'} />
                                </Stack>
                            </IdentityItem>

                            <IdentityItem>
                                <Stack direction={'row'} alignItems={'center'} gap={'1rem'}>

                                    <Typography variant='h4'>Aadhaar</Typography>

                                    <Stack direction={'row'}>
                                        <span class="material-symbols-outlined" style={{
                                            color: 'var(--color-text-3)'
                                        }}>
                                            attach_file
                                        </span>
                                        <Typography variant='link1'>File</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction={'row'} spacing={'2rem'}>
                                    <DetailItem title={'ID Number'} value={'Sahu'} />
                                    <DetailItem title={'Name'} value={'Rishik Kumar Sahu'} />
                                </Stack>
                                <Stack direction={'row'} spacing={'2rem'}>
                                    <DetailItem title={'Date of Birth'} value={'24-Nov-2000'} />
                                    <DetailItem title={'Gender'} value={'Male'} />
                                </Stack>
                                <Stack direction={'row'} spacing={'2rem'}>
                                    <DetailItem title={'Address'} value={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aspernatur voluptas dignissimos illum.'} />
                                </Stack>
                            </IdentityItem>


                        </Stack>


                        <Stack direction={'row'} spacing={'2rem'}>


                            <IdentityItem>
                                <Stack direction={'row'} alignItems={'center'} gap={'1rem'} sx={{
                                    // backgroundColor: 'var(--color-primary-light)',
                                    // padding: '0.125rem 1rem',
                                    // borderRadius: '.25rem',
                                }}>

                                    <Typography variant='h4' >PAN</Typography>

                                    <Stack direction={'row'}>
                                        <span class="material-symbols-outlined" style={{
                                            color: 'var(--color-text-3)'
                                        }}>
                                            attach_file
                                        </span>
                                        <Typography variant='link1'>File</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction={'row'} spacing={'2rem'}>
                                    <DetailItem title={'PAN Number'} value={'Sahu'} />
                                    <DetailItem title={'Name'} value={'Rishik Kumar Sahu'} />
                                </Stack>
                                <Stack direction={'row'} spacing={'2rem'}>
                                    <DetailItem title={'Date of Birth'} value={'24-Nov-2000'} />
                                    <DetailItem title={"Parent/Spouse's Name"} value={'Male'} />
                                </Stack>

                            </IdentityItem><IdentityItem>
                                <Stack direction={'row'} alignItems={'center'} gap={'1rem'}>

                                    <Typography variant='h4'>Pay Roll</Typography>

                                    <Stack direction={'row'}>
                                        <span class="material-symbols-outlined" style={{
                                            color: 'var(--color-text-3)'
                                        }}>
                                            attach_file
                                        </span>
                                        <Typography variant='link1'>File</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction={'row'} spacing={'2rem'}>
                                    <DetailItem title={'PAN Number'} value={'**********'} />
                                    <DetailItem title={'Name'} value={'Rishik Kumar Sahu'} />
                                </Stack>
                                <Stack direction={'row'} spacing={'2rem'}>
                                    <DetailItem title={'Date of Birth'} value={'24-Nov-2000'} />
                                    <DetailItem title={"Parent/Spouse's Name"} value={'Rewa Saw'} />
                                </Stack>

                            </IdentityItem>

                        </Stack>



                    </Stack>
                </FlexBox>
            </Stack>

        </Stack>
    )
}

export default ProfileDetails