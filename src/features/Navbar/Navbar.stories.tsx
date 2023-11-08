import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { NavbarContext } from '@/contexts'

const meta = {
  title: 'Pykex/Navbar',
  component: Navbar,
  argTypes: {},
} as Meta<typeof Navbar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render() {
    return (
      <NavbarContext.Provider value={{}}>
        <Navbar />
      </NavbarContext.Provider>
    )
  },
}
