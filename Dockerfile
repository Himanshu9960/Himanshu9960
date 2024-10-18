FROM registry.centos.org/centos/centos

RUN touch "day1"
RUN yum install iputils -y
#test
CMD ["ping", "yahoo.com"]
