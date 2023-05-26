import Button from '@/components/Button'
import Center from '@/components/Center'
import styled from 'styled-components'

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`
const Title = styled.h1`
  font-weight: normal;
  margin: 0;
  font-size: 3rem;
`
const Desc = styled.p`
  color: #aaa;
  font-size: .8rem;
`
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 40px;
  img{
    max-width: 100%;
  }
`
const Column = styled.div`
  display: flex;
  align-items: center;
`
const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`

export default function Featured() {
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>Pro anywhere</Title>
              <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Desc>
              <ButtonWrapper>
                <Button outline white>Read more</Button>
                <Button primary>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                  Add to cart
                </Button>
              </ButtonWrapper>
            </div>
          </Column>
          <Column>
            <img src="data:image/jpeg;base64,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" alt=""/>
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  )
}
