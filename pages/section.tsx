import { Grid, GridItem, Container, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Section = () => {
  const grid = [
    {w: '100%', h: '20', id: 1, text: 'Repository', href: 'https://github.com/haikelz/my-next-starterpack'}, 
    {w: '100%', h: '20', id: 2, text: 'NextJS Website', href: 'https://nextjs.org'},
    {w: '100%', h: '20', id: 3, text: 'Chakra UI Website', href: 'https://chakra-ui.com'},
    {w: '100%', h: '20', id: 4, text: 'Typescript Website', href: 'https://typescriptlang.org'},
  ]
  return (
    <>
      <Grid templateColumns={'repeat(1, 1fr)'} px={10} mx={10} mt={5} gap={6}>
        { grid.map(griditem => (
          <GridItem mx={0} key={griditem.id} w={griditem.w} h={griditem.h} py={7} textColor={'white'} textAlign={'center'}>
            <Container className={'grid'} py={5} bgColor={'navy'}>
              <Link href={griditem.href} isExternal>
                {griditem.text} <ExternalLinkIcon mx={'2px'} />
              </Link>
            </Container>
          </GridItem>
        )
      ) 
    }
      </Grid>

    </>
  )
}

export default Section; 
