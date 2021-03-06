import { compose, withState, withHandlers, lifecycle } from 'recompose'

import { getMovements } from '../../services'
import { moneyFormat } from '../../utils/mask'

const profile = JSON.parse(localStorage.getItem('profile'))

const enhance = compose(
  withState('initialValues', 'setInitialValues', {}),
  withState('visible', 'setVisible', false),
  withState('showModal', 'setShowModal', false),
  withHandlers({
    handleSetInitialValues: ({ setInitialValues }) => () => {
      fetch(`${getMovements}/${profile.idUser}`)
        .then(response => response.json())
        .then(data => {
          let total = 0

          data.forEach(item => {
            total += item.value
          })

          const movements = {
            id: profile.idUser,
            firstTarget: '22/06/2019',
            lastTarget: '22/06/2019',
            progress: 90,
            movements: data.map(item => {
              const line = {
                type: item.type,
                date: item.date,
                value: moneyFormat(item.value),
                reference: item.reference,
                description: item.descriptionMovement
              }

              return line
            }),
            category: [
              {
                value: moneyFormat(total),
                title: 'R$ acumulado'
              },
              {
                value: moneyFormat(data[0].value),
                title: 'Poupança'
              },
              {
                value: moneyFormat(data[1].value),
                title: 'Investimentos'
              },
              {
                value: moneyFormat(data[2].value),
                title: 'Renda mensal'
              }
            ]
          }

          return setInitialValues(movements)
        }).catch(error => error)
    },
    toggleModal: ({ showModal, setShowModal }) => () => {
      setShowModal(!showModal)
    },
    toggleVisible: ({ visible, setVisible }) => () => {
      setVisible(!visible)
    }
  }),
  lifecycle({
    componentDidMount() {
      const { handleSetInitialValues } = this.props
      handleSetInitialValues()
    }
  })
)

export default enhance


