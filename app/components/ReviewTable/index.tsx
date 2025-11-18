import React, { useEffect } from "react";
import { Checkbox, Label, Modal, ModalBody, ModalHeader, TextInput } from "flowbite-react";

// config
import { type ReviewProps, reviewTableFields } from "@/config/interfaces/reviewProps";
import {
  reviewTableBtnCss,
  emptyTableCss,
  reviewTableText,
  populateTableCss,
  reviewTableCss,
} from "@/config/components/reviewTable";

// assets
import EditIcon from "@/assets/EditIcon";
import TrashIcon from "@/assets/TrashIcon";

// constants
import { reviewFormAllowedComponents } from "@/constants/reviewForm";

// components
import StarRating from "@/components/StarRating";
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";
import ReviewForm from "@/components/ReviewForm";

// context
import { useReviewListContext } from "@/context/ReviewContext";

interface AddReviewButtonProps {
  dataModalTarget?: string;
  dataModalToggle?: string;
  onClick: () => void
}

const AddReviewButton: React.FC<AddReviewButtonProps> = ({ onClick }) => {
  return (
    <Button label={reviewTableText.addReview} 
      className={reviewTableBtnCss.actionableBtn}
      onClick={onClick}
    />
  )
}

interface EmptyTableProps {
  children: React.ReactNode
}

const EmptyTable: React.FC<EmptyTableProps> = ({ children }) => {
  return (
    <div className={emptyTableCss.wraper} >
      <div className={emptyTableCss.contentWraper} >
        <h1 className={emptyTableCss.header} >{reviewTableText.noReview}</h1>
        <div className={emptyTableCss.div}>
          {children}
        </div>
      </div>
    </div>
  );
}

interface PopulatedTableProps {
  reviewsList: ReviewProps[];
  onClickUpdateBtn: (review: ReviewProps) => void;
  onClickDeleteBtn: (review: ReviewProps) => void;
  onClickFilterBtn: (field: keyof ReviewProps, value: string | number) => void;
  onClickResetBtn: () => void;
}

const PopulatedTable: React.FC<PopulatedTableProps> = ({ reviewsList, onClickUpdateBtn, onClickDeleteBtn, onClickFilterBtn, onClickResetBtn }) => {
  return (
    <div className={populateTableCss.wraper}>
      <div className={populateTableCss.overflowX}>
        <div className={populateTableCss.sizeControl}>
          <div className={populateTableCss.contentWraper}>
            <table className={populateTableCss.tag}>
              <thead className={populateTableCss.thead}>
                <tr>
                  {reviewTableFields.map(({ name, label, filterBy, component }) => (
                    <th key={name} scope="col" className={populateTableCss.th}>
                      {
                        filterBy 
                        ? <Dropdown label={label}
                            options={filterBy}
                            onClick={(value) => onClickFilterBtn(name as keyof ReviewProps, value)}
                            component={component}
                          />
                        : <span>{label}</span>
                      }
                    </th>
                  ))}
                  <th scope="col" className={populateTableCss.thHidden}>
                    {/* This text is only used for space purpose, it will not show to the user */}
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className={populateTableCss.tbody}>
                {
                  reviewsList.map((review, idx) => (
                    <tr key={idx}>
                      {reviewTableFields.map(({ name, component }) => (
                        <td key={name} className={populateTableCss.tbodyTd}>
                          {
                            component && component === reviewFormAllowedComponents.StarRating
                            ? <StarRating iconClassName={populateTableCss.icon} value={review[name as keyof ReviewProps] !== undefined ? review[name as keyof ReviewProps] as number : 0} onChange={() => {}} />
                            : review[name as keyof ReviewProps] !== undefined ? review[name as keyof ReviewProps] : 'N/A'
                          }
                        </td>
                      ))}
                      <td className={populateTableCss.tbodyTdIconWraper}>
                        <div className={populateTableCss.tbodyTdIconDiv}>
                          <button className={populateTableCss.tbodyTdIconRed} onClick={() => onClickDeleteBtn(review)}>
                            <TrashIcon />
                          </button>
                          <button className={populateTableCss.tbodyTdIconYellow} onClick={() => onClickUpdateBtn(review)}>
                            <EditIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            {
              reviewsList.length === 0 &&
              <div className={populateTableCss.actionableBtn}>
                <Button className={reviewTableBtnCss.actionableBtn} label={reviewTableText.resetText} onClick={onClickResetBtn} />
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

const ReviewTable: React.FC = () => {
  const { value, setValue } = useReviewListContext();
  const [listOfReviews, setListOfReviews] = React.useState([] as ReviewProps[]);
  const [modalReviewForm, setModalReviewForm] = React.useState({ isOpen: false } as { isOpen: boolean, review?: ReviewProps });

  useEffect(() => {
    setListOfReviews(value);
  }, [value]);

  const handleOpenModal = (review?: ReviewProps) => {
    setModalReviewForm({
      isOpen: true,
      review: review,
    });
  };

  const handleCloseModal = () => {
    setModalReviewForm({
      isOpen: false,
      review: undefined,
    });
  };

  const handleAddOrUpdateReviewClick = (review: ReviewProps) => {
    setValue((cur) => {
      const index = cur.findIndex(({ id }) => (review.id === id));
      if (index === -1)
      {
        return [...cur, review];
      }
      cur.splice(index, 1, review);
      return [...cur];
    });

    handleCloseModal();
  };

  const handleDeleteReviewClick = (review: ReviewProps) => {
    setValue((cur) => {
      const index = cur.findIndex(({ id }) => (review.id === id));
      if (index === -1)
      {
        return cur;
      }

      cur.splice(index, 1);
      return [...cur];
    });
  };

  const handleFilterReviewClick = (label: keyof ReviewProps, labelValue: string | number) => {
    setListOfReviews(() => {
      return value.filter((element) => element[label] === labelValue);
    })
  };

  const handleResetFilterClick = () => {
    setListOfReviews(value);
  }

  return (
    <section className={reviewTableCss.section}>
      <Modal show={modalReviewForm.isOpen} size="md" popup onClose={handleCloseModal} >
        <ModalHeader />
        <ModalBody>
          <ReviewForm review={modalReviewForm.review} onSubmit={handleAddOrUpdateReviewClick} />
        </ModalBody>
      </Modal>
      <div className={reviewTableCss.wraper}>
        <div>
          <div className={reviewTableCss.headerWraper}>
            <h2 className={reviewTableCss.header}>{reviewTableText.reviews.charAt(0).toUpperCase() + reviewTableText.reviews.slice(1)}</h2>
            <span className={reviewTableCss.count}>{value.length} {reviewTableText.reviews.toLocaleLowerCase()}</span>
          </div>
        </div>
        <div className={reviewTableCss.headerWraper}>
          <Button label={reviewTableText.resetFilter} 
            className={reviewTableBtnCss.actionableBtn}
            onClick={handleResetFilterClick}
          />
          <AddReviewButton onClick={() => handleOpenModal()} />
        </div>
      </div>
      {value.length === 0 
        ? <EmptyTable>
            <AddReviewButton onClick={() => handleOpenModal()} />
          </EmptyTable> 
        : <PopulatedTable reviewsList={listOfReviews}
            onClickUpdateBtn={handleOpenModal}
            onClickFilterBtn={handleFilterReviewClick}
            onClickDeleteBtn={handleDeleteReviewClick}
            onClickResetBtn={handleResetFilterClick}
          />
      }
    </section>
  );
}

export default ReviewTable;