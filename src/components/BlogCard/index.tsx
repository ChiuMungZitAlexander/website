import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { veryLightGrey, black, darkGrey, blue } from 'src/styles/colors';

import TagIcon from 'src/assets/icons/tag.svg';

export interface IBlogFrontmatter {
  title: string;
  date: string;
  tag: string;
  type: string;
}

interface IBlogPostProps extends IBlogFrontmatter {
  slug: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 0.5rem;
  transition: background-color 0.4s ease-in-out;

  &:hover {
    background-color: ${veryLightGrey};
  }
`;

export const Title = styled.p`
  color: ${black};
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const Tags = styled.p`
  background-image: url(${TagIcon});
  background-position: 0 0.5rem;
  background-repeat: no-repeat;
  background-size: 0.8rem;
  padding-left: 1.2rem;
`;

export const Tag = styled.span`
  color: ${darkGrey};
  font-size: 0.5rem;
  margin-right: 0.5rem;
`;

export const Type = styled.span`
  color: ${blue};
  font-size: 0.75rem;
  font-weight: 700;
  margin-right: 0.5rem;
`;

export const Date = styled.span`
  color: ${black};
  font-size: 0.75rem;
`;

const BlogCard = ({
  title,
  date,
  tag,
  type,
  slug,
}: IBlogPostProps): JSX.Element => (
  <Link to={slug} style={{ textDecoration: 'none' }}>
    <Container>
      <Title>{title}</Title>
      <Tags>
        {tag.split(',').map(_tag => (
          <Tag key={_tag}>{_tag}</Tag>
        ))}
      </Tags>
      <p>
        <Type>{type}</Type>
        <Date>{date}</Date>
      </p>
    </Container>
  </Link>
);

export default BlogCard;
