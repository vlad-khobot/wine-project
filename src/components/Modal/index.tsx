import { useFormik } from 'formik'
import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hideModal, pushData } from '../../store/slices/appSlice'
import { ReactComponent as CloseSvg } from '../../assets/close.svg'
import {
  CloseButton,
  InputContainer,
  InputField,
  InputLabel,
  ModalContainer,
  StyledButton,
  StyledForm,
} from './styled'

const Modal = () => {
  const dispatch = useDispatch()
  const escapeHandler = useCallback(
    (e) => {
      if (e.key === 'Escape') dispatch(hideModal())
    },
    [dispatch]
  )
  const hideHandler = useCallback(() => {
    dispatch(hideModal())
  }, [dispatch])
  const formik = useFormik({
    initialValues: {
      image: '',
      name: '',
      region: '',
      country: '',
      grapes: '',
      wineType: '',
      price: 1,
      url_1: '',
      wine_style: '',
      Body: '',
      Acidity: '',
      Tannins: '',
      Sweetness: '',
    },
    onSubmit: (values) => {
      dispatch(hideModal())
      dispatch(
        pushData({
          data: {
            image: values.image,
            name: values.name,
            grapes: values.grapes,
            wine_type: values.wineType,
            price: values.price,
            url_1: values.url_1,
            wine_style: values.wine_style,
            Body: values.Body,
            Acidity: values.Acidity,
            Tannins: values.Tannins,
            Sweetness: values.Sweetness,
            region: `${values.country + ' / ' + values.region}`,
          },
        })
      )
    },
  })
  useEffect(() => {
    document.addEventListener('click', hideHandler)
    document.addEventListener('keydown', (e) => escapeHandler(e))
    return () => {
      document.removeEventListener('click', hideHandler)
      document.addEventListener('keydown', (e) => escapeHandler(e))
    }
  }, [escapeHandler, hideHandler])
  return (
    <ModalContainer>
      <StyledForm
        onClick={(e) => e.stopPropagation()}
        onSubmit={formik.handleSubmit}
      >
        <CloseButton onClick={hideHandler}>
          <CloseSvg />
        </CloseButton>
        <InputContainer className="input">
          <InputField
            id="image"
            name="image"
            type="text"
            required
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          <InputLabel>Wine image url</InputLabel>
        </InputContainer>
        <InputContainer className="input">
          <InputField
            maxLength={20}
            id="name"
            name="name"
            type="text"
            required
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <InputLabel>Wine name</InputLabel>
        </InputContainer>
        <InputContainer className="input">
          <InputField
            maxLength={20}
            id="country"
            name="country"
            type="text"
            required
            onChange={formik.handleChange}
            value={formik.values.country}
          />
          <InputLabel>Wine country</InputLabel>
        </InputContainer>
        <InputContainer className="input">
          <InputField
            maxLength={20}
            id="region"
            name="region"
            type="text"
            required
            onChange={formik.handleChange}
            value={formik.values.region}
          />
          <InputLabel>Wine region</InputLabel>
        </InputContainer>
        <InputContainer className="input">
          <InputField
            maxLength={80}
            id="grapes"
            name="grapes"
            type="text"
            required
            onChange={formik.handleChange}
            value={formik.values.grapes}
          />
          <InputLabel>Wine grapes</InputLabel>
        </InputContainer>
        <InputContainer className="input">
          <InputField
            maxLength={20}
            id="wineType"
            name="wineType"
            type="text"
            required
            onChange={formik.handleChange}
            defaultValue={formik.values.wineType}
          />
          <InputLabel>Wine type</InputLabel>
        </InputContainer>
        <InputContainer className="input">
          <InputField
            maxLength={20}
            min={1}
            id="price"
            name="price"
            type="number"
            required
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <InputLabel>Wine price</InputLabel>
        </InputContainer>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </ModalContainer>
  )
}
export default Modal
